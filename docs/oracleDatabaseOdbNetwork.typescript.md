# `oracleDatabaseOdbNetwork` Submodule <a name="`oracleDatabaseOdbNetwork` Submodule" id="@cdktf/provider-google.oracleDatabaseOdbNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseOdbNetwork <a name="OracleDatabaseOdbNetwork" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network google_oracle_database_odb_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer"></a>

```typescript
import { oracleDatabaseOdbNetwork } from '@cdktf/provider-google'

new oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork(scope: Construct, id: string, config: OracleDatabaseOdbNetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig">OracleDatabaseOdbNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig">OracleDatabaseOdbNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.putTimeouts"></a>

```typescript
public putTimeouts(value: OracleDatabaseOdbNetworkTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a>

---

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OracleDatabaseOdbNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isConstruct"></a>

```typescript
import { oracleDatabaseOdbNetwork } from '@cdktf/provider-google'

oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isTerraformElement"></a>

```typescript
import { oracleDatabaseOdbNetwork } from '@cdktf/provider-google'

oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isTerraformResource"></a>

```typescript
import { oracleDatabaseOdbNetwork } from '@cdktf/provider-google'

oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.generateConfigForImport"></a>

```typescript
import { oracleDatabaseOdbNetwork } from '@cdktf/provider-google'

oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OracleDatabaseOdbNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OracleDatabaseOdbNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OracleDatabaseOdbNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OracleDatabaseOdbNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.entitlementId">entitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference">OracleDatabaseOdbNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.odbNetworkIdInput">odbNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.odbNetworkId">odbNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.entitlementId"></a>

```typescript
public readonly entitlementId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.timeouts"></a>

```typescript
public readonly timeouts: OracleDatabaseOdbNetworkTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference">OracleDatabaseOdbNetworkTimeoutsOutputReference</a>

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `odbNetworkIdInput`<sup>Optional</sup> <a name="odbNetworkIdInput" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.odbNetworkIdInput"></a>

```typescript
public readonly odbNetworkIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OracleDatabaseOdbNetworkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a>

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `odbNetworkId`<sup>Required</sup> <a name="odbNetworkId" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.odbNetworkId"></a>

```typescript
public readonly odbNetworkId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseOdbNetworkConfig <a name="OracleDatabaseOdbNetworkConfig" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.Initializer"></a>

```typescript
import { oracleDatabaseOdbNetwork } from '@cdktf/provider-google'

const oracleDatabaseOdbNetworkConfig: oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.network">network</a></code> | <code>string</code> | The name of the VPC network in the following format: projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.odbNetworkId">odbNetworkId</a></code> | <code>string</code> | The ID of the OdbNetwork to create. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#id OracleDatabaseOdbNetwork#id}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#project OracleDatabaseOdbNetwork#project}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#location OracleDatabaseOdbNetwork#location}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The name of the VPC network in the following format: projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#network OracleDatabaseOdbNetwork#network}

---

##### `odbNetworkId`<sup>Required</sup> <a name="odbNetworkId" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.odbNetworkId"></a>

```typescript
public readonly odbNetworkId: string;
```

- *Type:* string

The ID of the OdbNetwork to create.

This value is restricted
to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#odb_network_id OracleDatabaseOdbNetwork#odb_network_id}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#deletion_protection OracleDatabaseOdbNetwork#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#id OracleDatabaseOdbNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#labels OracleDatabaseOdbNetwork#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#project OracleDatabaseOdbNetwork#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OracleDatabaseOdbNetworkTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#timeouts OracleDatabaseOdbNetwork#timeouts}

---

### OracleDatabaseOdbNetworkTimeouts <a name="OracleDatabaseOdbNetworkTimeouts" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.Initializer"></a>

```typescript
import { oracleDatabaseOdbNetwork } from '@cdktf/provider-google'

const oracleDatabaseOdbNetworkTimeouts: oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#create OracleDatabaseOdbNetwork#create}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#delete OracleDatabaseOdbNetwork#delete}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#update OracleDatabaseOdbNetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#create OracleDatabaseOdbNetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#delete OracleDatabaseOdbNetwork#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_odb_network#update OracleDatabaseOdbNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseOdbNetworkTimeoutsOutputReference <a name="OracleDatabaseOdbNetworkTimeoutsOutputReference" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseOdbNetwork } from '@cdktf/provider-google'

new oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OracleDatabaseOdbNetworkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a>

---



