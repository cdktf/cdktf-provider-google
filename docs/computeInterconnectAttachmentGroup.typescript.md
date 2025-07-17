# `computeInterconnectAttachmentGroup` Submodule <a name="`computeInterconnectAttachmentGroup` Submodule" id="@cdktf/provider-google.computeInterconnectAttachmentGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInterconnectAttachmentGroup <a name="ComputeInterconnectAttachmentGroup" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_interconnect_attachment_group google_compute_interconnect_attachment_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

new computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup(scope: Construct, id: string, config: ComputeInterconnectAttachmentGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig">ComputeInterconnectAttachmentGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig">ComputeInterconnectAttachmentGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.putAttachments">putAttachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.putIntent">putIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetAttachments">resetAttachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetInterconnectGroup">resetInterconnectGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttachments` <a name="putAttachments" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.putAttachments"></a>

```typescript
public putAttachments(value: IResolvable | ComputeInterconnectAttachmentGroupAttachments[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.putAttachments.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachments">ComputeInterconnectAttachmentGroupAttachments</a>[]

---

##### `putIntent` <a name="putIntent" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.putIntent"></a>

```typescript
public putIntent(value: ComputeInterconnectAttachmentGroupIntent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.putIntent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntent">ComputeInterconnectAttachmentGroupIntent</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeInterconnectAttachmentGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts">ComputeInterconnectAttachmentGroupTimeouts</a>

---

##### `resetAttachments` <a name="resetAttachments" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetAttachments"></a>

```typescript
public resetAttachments(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInterconnectGroup` <a name="resetInterconnectGroup" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetInterconnectGroup"></a>

```typescript
public resetInterconnectGroup(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeInterconnectAttachmentGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.isConstruct"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.isTerraformElement"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.isTerraformResource"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.generateConfigForImport"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeInterconnectAttachmentGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeInterconnectAttachmentGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeInterconnectAttachmentGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_interconnect_attachment_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeInterconnectAttachmentGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.attachments">attachments</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList">ComputeInterconnectAttachmentGroupAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.configured">configured</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList">ComputeInterconnectAttachmentGroupConfiguredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.intent">intent</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference">ComputeInterconnectAttachmentGroupIntentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.logicalStructure">logicalStructure</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList">ComputeInterconnectAttachmentGroupLogicalStructureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference">ComputeInterconnectAttachmentGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.attachmentsInput">attachmentsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachments">ComputeInterconnectAttachmentGroupAttachments</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.intentInput">intentInput</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntent">ComputeInterconnectAttachmentGroupIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.interconnectGroupInput">interconnectGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts">ComputeInterconnectAttachmentGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.interconnectGroup">interconnectGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attachments`<sup>Required</sup> <a name="attachments" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.attachments"></a>

```typescript
public readonly attachments: ComputeInterconnectAttachmentGroupAttachmentsList;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList">ComputeInterconnectAttachmentGroupAttachmentsList</a>

---

##### `configured`<sup>Required</sup> <a name="configured" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.configured"></a>

```typescript
public readonly configured: ComputeInterconnectAttachmentGroupConfiguredList;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList">ComputeInterconnectAttachmentGroupConfiguredList</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.intent"></a>

```typescript
public readonly intent: ComputeInterconnectAttachmentGroupIntentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference">ComputeInterconnectAttachmentGroupIntentOutputReference</a>

---

##### `logicalStructure`<sup>Required</sup> <a name="logicalStructure" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.logicalStructure"></a>

```typescript
public readonly logicalStructure: ComputeInterconnectAttachmentGroupLogicalStructureList;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList">ComputeInterconnectAttachmentGroupLogicalStructureList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeInterconnectAttachmentGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference">ComputeInterconnectAttachmentGroupTimeoutsOutputReference</a>

---

##### `attachmentsInput`<sup>Optional</sup> <a name="attachmentsInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.attachmentsInput"></a>

```typescript
public readonly attachmentsInput: IResolvable | ComputeInterconnectAttachmentGroupAttachments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachments">ComputeInterconnectAttachmentGroupAttachments</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `intentInput`<sup>Optional</sup> <a name="intentInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.intentInput"></a>

```typescript
public readonly intentInput: ComputeInterconnectAttachmentGroupIntent;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntent">ComputeInterconnectAttachmentGroupIntent</a>

---

##### `interconnectGroupInput`<sup>Optional</sup> <a name="interconnectGroupInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.interconnectGroupInput"></a>

```typescript
public readonly interconnectGroupInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeInterconnectAttachmentGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts">ComputeInterconnectAttachmentGroupTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interconnectGroup`<sup>Required</sup> <a name="interconnectGroup" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.interconnectGroup"></a>

```typescript
public readonly interconnectGroup: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInterconnectAttachmentGroupAttachments <a name="ComputeInterconnectAttachmentGroupAttachments" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachments.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

const computeInterconnectAttachmentGroupAttachments: computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachments.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_interconnect_attachment_group#name ComputeInterconnectAttachmentGroup#name}. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachments.property.attachment">attachment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_interconnect_attachment_group#attachment ComputeInterconnectAttachmentGroup#attachment}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachments.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_interconnect_attachment_group#name ComputeInterconnectAttachmentGroup#name}.

---

##### `attachment`<sup>Optional</sup> <a name="attachment" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachments.property.attachment"></a>

```typescript
public readonly attachment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_interconnect_attachment_group#attachment ComputeInterconnectAttachmentGroup#attachment}.

---

### ComputeInterconnectAttachmentGroupConfig <a name="ComputeInterconnectAttachmentGroupConfig" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

const computeInterconnectAttachmentGroupConfig: computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.intent">intent</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntent">ComputeInterconnectAttachmentGroupIntent</a></code> | intent block. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.attachments">attachments</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachments">ComputeInterconnectAttachmentGroupAttachments</a>[]</code> | attachments block. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_interconnect_attachment_group#id ComputeInterconnectAttachmentGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.interconnectGroup">interconnectGroup</a></code> | <code>string</code> | The URL of an InterconnectGroup that groups these Attachments' Interconnects. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_interconnect_attachment_group#project ComputeInterconnectAttachmentGroup#project}. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts">ComputeInterconnectAttachmentGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.intent"></a>

```typescript
public readonly intent: ComputeInterconnectAttachmentGroupIntent;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntent">ComputeInterconnectAttachmentGroupIntent</a>

intent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_interconnect_attachment_group#intent ComputeInterconnectAttachmentGroup#intent}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created. The name must be
1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first
character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_interconnect_attachment_group#name ComputeInterconnectAttachmentGroup#name}

---

##### `attachments`<sup>Optional</sup> <a name="attachments" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.attachments"></a>

```typescript
public readonly attachments: IResolvable | ComputeInterconnectAttachmentGroupAttachments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachments">ComputeInterconnectAttachmentGroupAttachments</a>[]

attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_interconnect_attachment_group#attachments ComputeInterconnectAttachmentGroup#attachments}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_interconnect_attachment_group#description ComputeInterconnectAttachmentGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_interconnect_attachment_group#id ComputeInterconnectAttachmentGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnectGroup`<sup>Optional</sup> <a name="interconnectGroup" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.interconnectGroup"></a>

```typescript
public readonly interconnectGroup: string;
```

- *Type:* string

The URL of an InterconnectGroup that groups these Attachments' Interconnects.

Customers do not need to set this unless directed by
Google Support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_interconnect_attachment_group#interconnect_group ComputeInterconnectAttachmentGroup#interconnect_group}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_interconnect_attachment_group#project ComputeInterconnectAttachmentGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeInterconnectAttachmentGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts">ComputeInterconnectAttachmentGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_interconnect_attachment_group#timeouts ComputeInterconnectAttachmentGroup#timeouts}

---

### ComputeInterconnectAttachmentGroupConfigured <a name="ComputeInterconnectAttachmentGroupConfigured" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfigured"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfigured.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

const computeInterconnectAttachmentGroupConfigured: computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfigured = { ... }
```


### ComputeInterconnectAttachmentGroupConfiguredAvailabilitySla <a name="ComputeInterconnectAttachmentGroupConfiguredAvailabilitySla" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySla"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySla.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

const computeInterconnectAttachmentGroupConfiguredAvailabilitySla: computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySla = { ... }
```


### ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers <a name="ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

const computeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers: computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers = { ... }
```


### ComputeInterconnectAttachmentGroupIntent <a name="ComputeInterconnectAttachmentGroupIntent" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntent.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

const computeInterconnectAttachmentGroupIntent: computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntent.property.availabilitySla">availabilitySla</a></code> | <code>string</code> | Which SLA the user intends this group to support. Possible values: ["PRODUCTION_NON_CRITICAL", "PRODUCTION_CRITICAL", "NO_SLA", "AVAILABILITY_SLA_UNSPECIFIED"]. |

---

##### `availabilitySla`<sup>Optional</sup> <a name="availabilitySla" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntent.property.availabilitySla"></a>

```typescript
public readonly availabilitySla: string;
```

- *Type:* string

Which SLA the user intends this group to support. Possible values: ["PRODUCTION_NON_CRITICAL", "PRODUCTION_CRITICAL", "NO_SLA", "AVAILABILITY_SLA_UNSPECIFIED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_interconnect_attachment_group#availability_sla ComputeInterconnectAttachmentGroup#availability_sla}

---

### ComputeInterconnectAttachmentGroupLogicalStructure <a name="ComputeInterconnectAttachmentGroupLogicalStructure" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructure.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

const computeInterconnectAttachmentGroupLogicalStructure: computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructure = { ... }
```


### ComputeInterconnectAttachmentGroupLogicalStructureRegions <a name="ComputeInterconnectAttachmentGroupLogicalStructureRegions" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegions.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

const computeInterconnectAttachmentGroupLogicalStructureRegions: computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegions = { ... }
```


### ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros <a name="ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

const computeInterconnectAttachmentGroupLogicalStructureRegionsMetros: computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros = { ... }
```


### ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities <a name="ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

const computeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities: computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities = { ... }
```


### ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones <a name="ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

const computeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones: computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones = { ... }
```


### ComputeInterconnectAttachmentGroupTimeouts <a name="ComputeInterconnectAttachmentGroupTimeouts" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

const computeInterconnectAttachmentGroupTimeouts: computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_interconnect_attachment_group#create ComputeInterconnectAttachmentGroup#create}. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_interconnect_attachment_group#delete ComputeInterconnectAttachmentGroup#delete}. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_interconnect_attachment_group#update ComputeInterconnectAttachmentGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_interconnect_attachment_group#create ComputeInterconnectAttachmentGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_interconnect_attachment_group#delete ComputeInterconnectAttachmentGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_interconnect_attachment_group#update ComputeInterconnectAttachmentGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInterconnectAttachmentGroupAttachmentsList <a name="ComputeInterconnectAttachmentGroupAttachmentsList" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

new computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.get"></a>

```typescript
public get(index: number): ComputeInterconnectAttachmentGroupAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachments">ComputeInterconnectAttachmentGroupAttachments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInterconnectAttachmentGroupAttachments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachments">ComputeInterconnectAttachmentGroupAttachments</a>[]

---


### ComputeInterconnectAttachmentGroupAttachmentsOutputReference <a name="ComputeInterconnectAttachmentGroupAttachmentsOutputReference" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

new computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.resetAttachment">resetAttachment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttachment` <a name="resetAttachment" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.resetAttachment"></a>

```typescript
public resetAttachment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.attachmentInput">attachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.attachment">attachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachments">ComputeInterconnectAttachmentGroupAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attachmentInput`<sup>Optional</sup> <a name="attachmentInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.attachmentInput"></a>

```typescript
public readonly attachmentInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `attachment`<sup>Required</sup> <a name="attachment" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.attachment"></a>

```typescript
public readonly attachment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInterconnectAttachmentGroupAttachments;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupAttachments">ComputeInterconnectAttachmentGroupAttachments</a>

---


### ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList <a name="ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

new computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.get"></a>

```typescript
public get(index: number): ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference <a name="ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

new computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.attachments">attachments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.blockerType">blockerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.documentationLink">documentationLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.explanation">explanation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.metros">metros</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers">ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attachments`<sup>Required</sup> <a name="attachments" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.attachments"></a>

```typescript
public readonly attachments: string[];
```

- *Type:* string[]

---

##### `blockerType`<sup>Required</sup> <a name="blockerType" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.blockerType"></a>

```typescript
public readonly blockerType: string;
```

- *Type:* string

---

##### `documentationLink`<sup>Required</sup> <a name="documentationLink" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.documentationLink"></a>

```typescript
public readonly documentationLink: string;
```

- *Type:* string

---

##### `explanation`<sup>Required</sup> <a name="explanation" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.explanation"></a>

```typescript
public readonly explanation: string;
```

- *Type:* string

---

##### `metros`<sup>Required</sup> <a name="metros" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.metros"></a>

```typescript
public readonly metros: string[];
```

- *Type:* string[]

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers">ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers</a>

---


### ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList <a name="ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

new computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.get"></a>

```typescript
public get(index: number): ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference <a name="ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

new computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.effectiveSla">effectiveSla</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.intendedSlaBlockers">intendedSlaBlockers</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList">ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySla">ComputeInterconnectAttachmentGroupConfiguredAvailabilitySla</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveSla`<sup>Required</sup> <a name="effectiveSla" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.effectiveSla"></a>

```typescript
public readonly effectiveSla: string;
```

- *Type:* string

---

##### `intendedSlaBlockers`<sup>Required</sup> <a name="intendedSlaBlockers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.intendedSlaBlockers"></a>

```typescript
public readonly intendedSlaBlockers: ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList">ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInterconnectAttachmentGroupConfiguredAvailabilitySla;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySla">ComputeInterconnectAttachmentGroupConfiguredAvailabilitySla</a>

---


### ComputeInterconnectAttachmentGroupConfiguredList <a name="ComputeInterconnectAttachmentGroupConfiguredList" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

new computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.get"></a>

```typescript
public get(index: number): ComputeInterconnectAttachmentGroupConfiguredOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeInterconnectAttachmentGroupConfiguredOutputReference <a name="ComputeInterconnectAttachmentGroupConfiguredOutputReference" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

new computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.property.availabilitySla">availabilitySla</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList">ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfigured">ComputeInterconnectAttachmentGroupConfigured</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilitySla`<sup>Required</sup> <a name="availabilitySla" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.property.availabilitySla"></a>

```typescript
public readonly availabilitySla: ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList">ComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfiguredOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInterconnectAttachmentGroupConfigured;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupConfigured">ComputeInterconnectAttachmentGroupConfigured</a>

---


### ComputeInterconnectAttachmentGroupIntentOutputReference <a name="ComputeInterconnectAttachmentGroupIntentOutputReference" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

new computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.resetAvailabilitySla">resetAvailabilitySla</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilitySla` <a name="resetAvailabilitySla" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.resetAvailabilitySla"></a>

```typescript
public resetAvailabilitySla(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.property.availabilitySlaInput">availabilitySlaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.property.availabilitySla">availabilitySla</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntent">ComputeInterconnectAttachmentGroupIntent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilitySlaInput`<sup>Optional</sup> <a name="availabilitySlaInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.property.availabilitySlaInput"></a>

```typescript
public readonly availabilitySlaInput: string;
```

- *Type:* string

---

##### `availabilitySla`<sup>Required</sup> <a name="availabilitySla" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.property.availabilitySla"></a>

```typescript
public readonly availabilitySla: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInterconnectAttachmentGroupIntent;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupIntent">ComputeInterconnectAttachmentGroupIntent</a>

---


### ComputeInterconnectAttachmentGroupLogicalStructureList <a name="ComputeInterconnectAttachmentGroupLogicalStructureList" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

new computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.get"></a>

```typescript
public get(index: number): ComputeInterconnectAttachmentGroupLogicalStructureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeInterconnectAttachmentGroupLogicalStructureOutputReference <a name="ComputeInterconnectAttachmentGroupLogicalStructureOutputReference" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

new computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.regions">regions</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList">ComputeInterconnectAttachmentGroupLogicalStructureRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructure">ComputeInterconnectAttachmentGroupLogicalStructure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.regions"></a>

```typescript
public readonly regions: ComputeInterconnectAttachmentGroupLogicalStructureRegionsList;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList">ComputeInterconnectAttachmentGroupLogicalStructureRegionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInterconnectAttachmentGroupLogicalStructure;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructure">ComputeInterconnectAttachmentGroupLogicalStructure</a>

---


### ComputeInterconnectAttachmentGroupLogicalStructureRegionsList <a name="ComputeInterconnectAttachmentGroupLogicalStructureRegionsList" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

new computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.get"></a>

```typescript
public get(index: number): ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList <a name="ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

new computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.get"></a>

```typescript
public get(index: number): ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference <a name="ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

new computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.facility">facility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.zones">zones</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList">ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities">ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `facility`<sup>Required</sup> <a name="facility" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.facility"></a>

```typescript
public readonly facility: string;
```

- *Type:* string

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.zones"></a>

```typescript
public readonly zones: ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList">ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities">ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities</a>

---


### ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList <a name="ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

new computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.get"></a>

```typescript
public get(index: number): ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference <a name="ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

new computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.attachment">attachment</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones">ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attachment`<sup>Required</sup> <a name="attachment" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.attachment"></a>

```typescript
public readonly attachment: string[];
```

- *Type:* string[]

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones">ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones</a>

---


### ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList <a name="ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

new computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.get"></a>

```typescript
public get(index: number): ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference <a name="ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

new computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.facilities">facilities</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList">ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.metro">metro</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros">ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `facilities`<sup>Required</sup> <a name="facilities" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.facilities"></a>

```typescript
public readonly facilities: ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList">ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList</a>

---

##### `metro`<sup>Required</sup> <a name="metro" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.metro"></a>

```typescript
public readonly metro: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros">ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros</a>

---


### ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference <a name="ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

new computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.metros">metros</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList">ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegions">ComputeInterconnectAttachmentGroupLogicalStructureRegions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metros`<sup>Required</sup> <a name="metros" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.metros"></a>

```typescript
public readonly metros: ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList">ComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInterconnectAttachmentGroupLogicalStructureRegions;
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupLogicalStructureRegions">ComputeInterconnectAttachmentGroupLogicalStructureRegions</a>

---


### ComputeInterconnectAttachmentGroupTimeoutsOutputReference <a name="ComputeInterconnectAttachmentGroupTimeoutsOutputReference" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeInterconnectAttachmentGroup } from '@cdktf/provider-google'

new computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts">ComputeInterconnectAttachmentGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInterconnectAttachmentGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInterconnectAttachmentGroup.ComputeInterconnectAttachmentGroupTimeouts">ComputeInterconnectAttachmentGroupTimeouts</a>

---



