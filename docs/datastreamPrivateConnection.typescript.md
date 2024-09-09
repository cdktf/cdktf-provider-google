# `datastreamPrivateConnection` Submodule <a name="`datastreamPrivateConnection` Submodule" id="@cdktf/provider-google.datastreamPrivateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatastreamPrivateConnection <a name="DatastreamPrivateConnection" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/datastream_private_connection google_datastream_private_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer"></a>

```typescript
import { datastreamPrivateConnection } from '@cdktf/provider-google'

new datastreamPrivateConnection.DatastreamPrivateConnection(scope: Construct, id: string, config: DatastreamPrivateConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig">DatastreamPrivateConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig">DatastreamPrivateConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.putVpcPeeringConfig">putVpcPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetCreateWithoutValidation">resetCreateWithoutValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: DatastreamPrivateConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts">DatastreamPrivateConnectionTimeouts</a>

---

##### `putVpcPeeringConfig` <a name="putVpcPeeringConfig" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.putVpcPeeringConfig"></a>

```typescript
public putVpcPeeringConfig(value: DatastreamPrivateConnectionVpcPeeringConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.putVpcPeeringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig">DatastreamPrivateConnectionVpcPeeringConfig</a>

---

##### `resetCreateWithoutValidation` <a name="resetCreateWithoutValidation" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetCreateWithoutValidation"></a>

```typescript
public resetCreateWithoutValidation(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatastreamPrivateConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isConstruct"></a>

```typescript
import { datastreamPrivateConnection } from '@cdktf/provider-google'

datastreamPrivateConnection.DatastreamPrivateConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isTerraformElement"></a>

```typescript
import { datastreamPrivateConnection } from '@cdktf/provider-google'

datastreamPrivateConnection.DatastreamPrivateConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isTerraformResource"></a>

```typescript
import { datastreamPrivateConnection } from '@cdktf/provider-google'

datastreamPrivateConnection.DatastreamPrivateConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.generateConfigForImport"></a>

```typescript
import { datastreamPrivateConnection } from '@cdktf/provider-google'

datastreamPrivateConnection.DatastreamPrivateConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatastreamPrivateConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatastreamPrivateConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatastreamPrivateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/datastream_private_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatastreamPrivateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.error">error</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList">DatastreamPrivateConnectionErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference">DatastreamPrivateConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.vpcPeeringConfig">vpcPeeringConfig</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference">DatastreamPrivateConnectionVpcPeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.createWithoutValidationInput">createWithoutValidationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.privateConnectionIdInput">privateConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts">DatastreamPrivateConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.vpcPeeringConfigInput">vpcPeeringConfigInput</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig">DatastreamPrivateConnectionVpcPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.createWithoutValidation">createWithoutValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.privateConnectionId">privateConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.error"></a>

```typescript
public readonly error: DatastreamPrivateConnectionErrorList;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList">DatastreamPrivateConnectionErrorList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.timeouts"></a>

```typescript
public readonly timeouts: DatastreamPrivateConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference">DatastreamPrivateConnectionTimeoutsOutputReference</a>

---

##### `vpcPeeringConfig`<sup>Required</sup> <a name="vpcPeeringConfig" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.vpcPeeringConfig"></a>

```typescript
public readonly vpcPeeringConfig: DatastreamPrivateConnectionVpcPeeringConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference">DatastreamPrivateConnectionVpcPeeringConfigOutputReference</a>

---

##### `createWithoutValidationInput`<sup>Optional</sup> <a name="createWithoutValidationInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.createWithoutValidationInput"></a>

```typescript
public readonly createWithoutValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `privateConnectionIdInput`<sup>Optional</sup> <a name="privateConnectionIdInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.privateConnectionIdInput"></a>

```typescript
public readonly privateConnectionIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatastreamPrivateConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts">DatastreamPrivateConnectionTimeouts</a>

---

##### `vpcPeeringConfigInput`<sup>Optional</sup> <a name="vpcPeeringConfigInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.vpcPeeringConfigInput"></a>

```typescript
public readonly vpcPeeringConfigInput: DatastreamPrivateConnectionVpcPeeringConfig;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig">DatastreamPrivateConnectionVpcPeeringConfig</a>

---

##### `createWithoutValidation`<sup>Required</sup> <a name="createWithoutValidation" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.createWithoutValidation"></a>

```typescript
public readonly createWithoutValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `privateConnectionId`<sup>Required</sup> <a name="privateConnectionId" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.privateConnectionId"></a>

```typescript
public readonly privateConnectionId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatastreamPrivateConnectionConfig <a name="DatastreamPrivateConnectionConfig" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.Initializer"></a>

```typescript
import { datastreamPrivateConnection } from '@cdktf/provider-google'

const datastreamPrivateConnectionConfig: datastreamPrivateConnection.DatastreamPrivateConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.location">location</a></code> | <code>string</code> | The name of the location this private connection is located in. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.privateConnectionId">privateConnectionId</a></code> | <code>string</code> | The private connectivity identifier. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.vpcPeeringConfig">vpcPeeringConfig</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig">DatastreamPrivateConnectionVpcPeeringConfig</a></code> | vpc_peering_config block. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.createWithoutValidation">createWithoutValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, will skip validations. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/datastream_private_connection#id DatastreamPrivateConnection#id}. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/datastream_private_connection#project DatastreamPrivateConnection#project}. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts">DatastreamPrivateConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/datastream_private_connection#display_name DatastreamPrivateConnection#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The name of the location this private connection is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/datastream_private_connection#location DatastreamPrivateConnection#location}

---

##### `privateConnectionId`<sup>Required</sup> <a name="privateConnectionId" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.privateConnectionId"></a>

```typescript
public readonly privateConnectionId: string;
```

- *Type:* string

The private connectivity identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/datastream_private_connection#private_connection_id DatastreamPrivateConnection#private_connection_id}

---

##### `vpcPeeringConfig`<sup>Required</sup> <a name="vpcPeeringConfig" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.vpcPeeringConfig"></a>

```typescript
public readonly vpcPeeringConfig: DatastreamPrivateConnectionVpcPeeringConfig;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig">DatastreamPrivateConnectionVpcPeeringConfig</a>

vpc_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/datastream_private_connection#vpc_peering_config DatastreamPrivateConnection#vpc_peering_config}

---

##### `createWithoutValidation`<sup>Optional</sup> <a name="createWithoutValidation" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.createWithoutValidation"></a>

```typescript
public readonly createWithoutValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, will skip validations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/datastream_private_connection#create_without_validation DatastreamPrivateConnection#create_without_validation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/datastream_private_connection#id DatastreamPrivateConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/datastream_private_connection#labels DatastreamPrivateConnection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/datastream_private_connection#project DatastreamPrivateConnection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatastreamPrivateConnectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts">DatastreamPrivateConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/datastream_private_connection#timeouts DatastreamPrivateConnection#timeouts}

---

### DatastreamPrivateConnectionError <a name="DatastreamPrivateConnectionError" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionError.Initializer"></a>

```typescript
import { datastreamPrivateConnection } from '@cdktf/provider-google'

const datastreamPrivateConnectionError: datastreamPrivateConnection.DatastreamPrivateConnectionError = { ... }
```


### DatastreamPrivateConnectionTimeouts <a name="DatastreamPrivateConnectionTimeouts" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts.Initializer"></a>

```typescript
import { datastreamPrivateConnection } from '@cdktf/provider-google'

const datastreamPrivateConnectionTimeouts: datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/datastream_private_connection#create DatastreamPrivateConnection#create}. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/datastream_private_connection#delete DatastreamPrivateConnection#delete}. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/datastream_private_connection#update DatastreamPrivateConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/datastream_private_connection#create DatastreamPrivateConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/datastream_private_connection#delete DatastreamPrivateConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/datastream_private_connection#update DatastreamPrivateConnection#update}.

---

### DatastreamPrivateConnectionVpcPeeringConfig <a name="DatastreamPrivateConnectionVpcPeeringConfig" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig.Initializer"></a>

```typescript
import { datastreamPrivateConnection } from '@cdktf/provider-google'

const datastreamPrivateConnectionVpcPeeringConfig: datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig.property.subnet">subnet</a></code> | <code>string</code> | A free subnet for peering. (CIDR of /29). |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig.property.vpc">vpc</a></code> | <code>string</code> | Fully qualified name of the VPC that Datastream will peer to. Format: projects/{project}/global/{networks}/{name}. |

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

A free subnet for peering. (CIDR of /29).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/datastream_private_connection#subnet DatastreamPrivateConnection#subnet}

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig.property.vpc"></a>

```typescript
public readonly vpc: string;
```

- *Type:* string

Fully qualified name of the VPC that Datastream will peer to. Format: projects/{project}/global/{networks}/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/datastream_private_connection#vpc DatastreamPrivateConnection#vpc}

---

## Classes <a name="Classes" id="Classes"></a>

### DatastreamPrivateConnectionErrorList <a name="DatastreamPrivateConnectionErrorList" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.Initializer"></a>

```typescript
import { datastreamPrivateConnection } from '@cdktf/provider-google'

new datastreamPrivateConnection.DatastreamPrivateConnectionErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.get"></a>

```typescript
public get(index: number): DatastreamPrivateConnectionErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatastreamPrivateConnectionErrorOutputReference <a name="DatastreamPrivateConnectionErrorOutputReference" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer"></a>

```typescript
import { datastreamPrivateConnection } from '@cdktf/provider-google'

new datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.details">details</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionError">DatastreamPrivateConnectionError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.details"></a>

```typescript
public readonly details: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatastreamPrivateConnectionError;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionError">DatastreamPrivateConnectionError</a>

---


### DatastreamPrivateConnectionTimeoutsOutputReference <a name="DatastreamPrivateConnectionTimeoutsOutputReference" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { datastreamPrivateConnection } from '@cdktf/provider-google'

new datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts">DatastreamPrivateConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatastreamPrivateConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts">DatastreamPrivateConnectionTimeouts</a>

---


### DatastreamPrivateConnectionVpcPeeringConfigOutputReference <a name="DatastreamPrivateConnectionVpcPeeringConfigOutputReference" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.Initializer"></a>

```typescript
import { datastreamPrivateConnection } from '@cdktf/provider-google'

new datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.subnetInput">subnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.vpcInput">vpcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.subnet">subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.vpc">vpc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig">DatastreamPrivateConnectionVpcPeeringConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.subnetInput"></a>

```typescript
public readonly subnetInput: string;
```

- *Type:* string

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.vpcInput"></a>

```typescript
public readonly vpcInput: string;
```

- *Type:* string

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.vpc"></a>

```typescript
public readonly vpc: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatastreamPrivateConnectionVpcPeeringConfig;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig">DatastreamPrivateConnectionVpcPeeringConfig</a>

---



