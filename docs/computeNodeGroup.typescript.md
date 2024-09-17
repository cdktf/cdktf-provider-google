# `computeNodeGroup` Submodule <a name="`computeNodeGroup` Submodule" id="@cdktf/provider-google.computeNodeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNodeGroup <a name="ComputeNodeGroup" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group google_compute_node_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer"></a>

```typescript
import { computeNodeGroup } from '@cdktf/provider-google'

new computeNodeGroup.ComputeNodeGroup(scope: Construct, id: string, config: ComputeNodeGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig">ComputeNodeGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig">ComputeNodeGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putAutoscalingPolicy">putAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putShareSettings">putShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetAutoscalingPolicy">resetAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetInitialSize">resetInitialSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetMaintenancePolicy">resetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetShareSettings">resetShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscalingPolicy` <a name="putAutoscalingPolicy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putAutoscalingPolicy"></a>

```typescript
public putAutoscalingPolicy(value: ComputeNodeGroupAutoscalingPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putAutoscalingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putMaintenanceWindow"></a>

```typescript
public putMaintenanceWindow(value: ComputeNodeGroupMaintenanceWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a>

---

##### `putShareSettings` <a name="putShareSettings" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putShareSettings"></a>

```typescript
public putShareSettings(value: ComputeNodeGroupShareSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putShareSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeNodeGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts">ComputeNodeGroupTimeouts</a>

---

##### `resetAutoscalingPolicy` <a name="resetAutoscalingPolicy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetAutoscalingPolicy"></a>

```typescript
public resetAutoscalingPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitialSize` <a name="resetInitialSize" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetInitialSize"></a>

```typescript
public resetInitialSize(): void
```

##### `resetMaintenancePolicy` <a name="resetMaintenancePolicy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetMaintenancePolicy"></a>

```typescript
public resetMaintenancePolicy(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetShareSettings` <a name="resetShareSettings" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetShareSettings"></a>

```typescript
public resetShareSettings(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeNodeGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isConstruct"></a>

```typescript
import { computeNodeGroup } from '@cdktf/provider-google'

computeNodeGroup.ComputeNodeGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isTerraformElement"></a>

```typescript
import { computeNodeGroup } from '@cdktf/provider-google'

computeNodeGroup.ComputeNodeGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isTerraformResource"></a>

```typescript
import { computeNodeGroup } from '@cdktf/provider-google'

computeNodeGroup.ComputeNodeGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.generateConfigForImport"></a>

```typescript
import { computeNodeGroup } from '@cdktf/provider-google'

computeNodeGroup.ComputeNodeGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeNodeGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeNodeGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeNodeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeNodeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.autoscalingPolicy">autoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference">ComputeNodeGroupAutoscalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference">ComputeNodeGroupMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.shareSettings">shareSettings</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference">ComputeNodeGroupShareSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference">ComputeNodeGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.autoscalingPolicyInput">autoscalingPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.initialSizeInput">initialSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenancePolicyInput">maintenancePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.nodeTemplateInput">nodeTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.shareSettingsInput">shareSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts">ComputeNodeGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.initialSize">initialSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenancePolicy">maintenancePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.nodeTemplate">nodeTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscalingPolicy`<sup>Required</sup> <a name="autoscalingPolicy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.autoscalingPolicy"></a>

```typescript
public readonly autoscalingPolicy: ComputeNodeGroupAutoscalingPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference">ComputeNodeGroupAutoscalingPolicyOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: ComputeNodeGroupMaintenanceWindowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference">ComputeNodeGroupMaintenanceWindowOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `shareSettings`<sup>Required</sup> <a name="shareSettings" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.shareSettings"></a>

```typescript
public readonly shareSettings: ComputeNodeGroupShareSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference">ComputeNodeGroupShareSettingsOutputReference</a>

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeNodeGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference">ComputeNodeGroupTimeoutsOutputReference</a>

---

##### `autoscalingPolicyInput`<sup>Optional</sup> <a name="autoscalingPolicyInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.autoscalingPolicyInput"></a>

```typescript
public readonly autoscalingPolicyInput: ComputeNodeGroupAutoscalingPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initialSizeInput`<sup>Optional</sup> <a name="initialSizeInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.initialSizeInput"></a>

```typescript
public readonly initialSizeInput: number;
```

- *Type:* number

---

##### `maintenancePolicyInput`<sup>Optional</sup> <a name="maintenancePolicyInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenancePolicyInput"></a>

```typescript
public readonly maintenancePolicyInput: string;
```

- *Type:* string

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: ComputeNodeGroupMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodeTemplateInput`<sup>Optional</sup> <a name="nodeTemplateInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.nodeTemplateInput"></a>

```typescript
public readonly nodeTemplateInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `shareSettingsInput`<sup>Optional</sup> <a name="shareSettingsInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.shareSettingsInput"></a>

```typescript
public readonly shareSettingsInput: ComputeNodeGroupShareSettings;
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeNodeGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts">ComputeNodeGroupTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initialSize`<sup>Required</sup> <a name="initialSize" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.initialSize"></a>

```typescript
public readonly initialSize: number;
```

- *Type:* number

---

##### `maintenancePolicy`<sup>Required</sup> <a name="maintenancePolicy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenancePolicy"></a>

```typescript
public readonly maintenancePolicy: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeTemplate`<sup>Required</sup> <a name="nodeTemplate" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.nodeTemplate"></a>

```typescript
public readonly nodeTemplate: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNodeGroupAutoscalingPolicy <a name="ComputeNodeGroupAutoscalingPolicy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.Initializer"></a>

```typescript
import { computeNodeGroup } from '@cdktf/provider-google'

const computeNodeGroupAutoscalingPolicy: computeNodeGroup.ComputeNodeGroupAutoscalingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.property.maxNodes">maxNodes</a></code> | <code>number</code> | Maximum size of the node group. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.property.minNodes">minNodes</a></code> | <code>number</code> | Minimum size of the node group. Must be less than or equal to max-nodes. The default value is 0. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.property.mode">mode</a></code> | <code>string</code> | The autoscaling mode. |

---

##### `maxNodes`<sup>Optional</sup> <a name="maxNodes" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.property.maxNodes"></a>

```typescript
public readonly maxNodes: number;
```

- *Type:* number

Maximum size of the node group.

Set to a value less than or equal
to 100 and greater than or equal to min-nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#max_nodes ComputeNodeGroup#max_nodes}

---

##### `minNodes`<sup>Optional</sup> <a name="minNodes" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.property.minNodes"></a>

```typescript
public readonly minNodes: number;
```

- *Type:* number

Minimum size of the node group. Must be less than or equal to max-nodes. The default value is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#min_nodes ComputeNodeGroup#min_nodes}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The autoscaling mode.

Set to one of the following:
  - OFF: Disables the autoscaler.
  - ON: Enables scaling in and scaling out.
  - ONLY_SCALE_OUT: Enables only scaling out.
  You must use this mode if your node groups are configured to
  restart their hosted VMs on minimal servers. Possible values: ["OFF", "ON", "ONLY_SCALE_OUT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#mode ComputeNodeGroup#mode}

---

### ComputeNodeGroupConfig <a name="ComputeNodeGroupConfig" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.Initializer"></a>

```typescript
import { computeNodeGroup } from '@cdktf/provider-google'

const computeNodeGroupConfig: computeNodeGroup.ComputeNodeGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.nodeTemplate">nodeTemplate</a></code> | <code>string</code> | The URL of the node template to which this node group belongs. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.autoscalingPolicy">autoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a></code> | autoscaling_policy block. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.description">description</a></code> | <code>string</code> | An optional textual description of the resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#id ComputeNodeGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.initialSize">initialSize</a></code> | <code>number</code> | The initial number of nodes in the node group. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.maintenancePolicy">maintenancePolicy</a></code> | <code>string</code> | Specifies how to handle instances when a node in the group undergoes maintenance. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#project ComputeNodeGroup#project}. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.shareSettings">shareSettings</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a></code> | share_settings block. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts">ComputeNodeGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.zone">zone</a></code> | <code>string</code> | Zone where this node group is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `nodeTemplate`<sup>Required</sup> <a name="nodeTemplate" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.nodeTemplate"></a>

```typescript
public readonly nodeTemplate: string;
```

- *Type:* string

The URL of the node template to which this node group belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#node_template ComputeNodeGroup#node_template}

---

##### `autoscalingPolicy`<sup>Optional</sup> <a name="autoscalingPolicy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.autoscalingPolicy"></a>

```typescript
public readonly autoscalingPolicy: ComputeNodeGroupAutoscalingPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a>

autoscaling_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#autoscaling_policy ComputeNodeGroup#autoscaling_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional textual description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#description ComputeNodeGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#id ComputeNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialSize`<sup>Optional</sup> <a name="initialSize" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.initialSize"></a>

```typescript
public readonly initialSize: number;
```

- *Type:* number

The initial number of nodes in the node group.

One of 'initial_size' or 'autoscaling_policy' must be configured on resource creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#initial_size ComputeNodeGroup#initial_size}

---

##### `maintenancePolicy`<sup>Optional</sup> <a name="maintenancePolicy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.maintenancePolicy"></a>

```typescript
public readonly maintenancePolicy: string;
```

- *Type:* string

Specifies how to handle instances when a node in the group undergoes maintenance.

Set to one of: DEFAULT, RESTART_IN_PLACE, or MIGRATE_WITHIN_NODE_GROUP. The default value is DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#maintenance_policy ComputeNodeGroup#maintenance_policy}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: ComputeNodeGroupMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#maintenance_window ComputeNodeGroup#maintenance_window}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#name ComputeNodeGroup#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#project ComputeNodeGroup#project}.

---

##### `shareSettings`<sup>Optional</sup> <a name="shareSettings" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.shareSettings"></a>

```typescript
public readonly shareSettings: ComputeNodeGroupShareSettings;
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a>

share_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#share_settings ComputeNodeGroup#share_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeNodeGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts">ComputeNodeGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#timeouts ComputeNodeGroup#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Zone where this node group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#zone ComputeNodeGroup#zone}

---

### ComputeNodeGroupMaintenanceWindow <a name="ComputeNodeGroupMaintenanceWindow" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow.Initializer"></a>

```typescript
import { computeNodeGroup } from '@cdktf/provider-google'

const computeNodeGroupMaintenanceWindow: computeNodeGroup.ComputeNodeGroupMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow.property.startTime">startTime</a></code> | <code>string</code> | instances.start time of the window. This must be in UTC format that resolves to one of 00:00, 04:00, 08:00, 12:00, 16:00, or 20:00. For example, both 13:00-5 and 08:00 are valid. |

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

instances.start time of the window. This must be in UTC format that resolves to one of 00:00, 04:00, 08:00, 12:00, 16:00, or 20:00. For example, both 13:00-5 and 08:00 are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#start_time ComputeNodeGroup#start_time}

---

### ComputeNodeGroupShareSettings <a name="ComputeNodeGroupShareSettings" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings.Initializer"></a>

```typescript
import { computeNodeGroup } from '@cdktf/provider-google'

const computeNodeGroupShareSettings: computeNodeGroup.ComputeNodeGroupShareSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings.property.shareType">shareType</a></code> | <code>string</code> | Node group sharing type. Possible values: ["ORGANIZATION", "SPECIFIC_PROJECTS", "LOCAL"]. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings.property.projectMap">projectMap</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap">ComputeNodeGroupShareSettingsProjectMap</a>[]</code> | project_map block. |

---

##### `shareType`<sup>Required</sup> <a name="shareType" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings.property.shareType"></a>

```typescript
public readonly shareType: string;
```

- *Type:* string

Node group sharing type. Possible values: ["ORGANIZATION", "SPECIFIC_PROJECTS", "LOCAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#share_type ComputeNodeGroup#share_type}

---

##### `projectMap`<sup>Optional</sup> <a name="projectMap" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings.property.projectMap"></a>

```typescript
public readonly projectMap: IResolvable | ComputeNodeGroupShareSettingsProjectMap[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap">ComputeNodeGroupShareSettingsProjectMap</a>[]

project_map block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#project_map ComputeNodeGroup#project_map}

---

### ComputeNodeGroupShareSettingsProjectMap <a name="ComputeNodeGroupShareSettingsProjectMap" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap.Initializer"></a>

```typescript
import { computeNodeGroup } from '@cdktf/provider-google'

const computeNodeGroupShareSettingsProjectMap: computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#id ComputeNodeGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap.property.projectId">projectId</a></code> | <code>string</code> | The project id/number should be the same as the key of this project config in the project map. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#id ComputeNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The project id/number should be the same as the key of this project config in the project map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#project_id ComputeNodeGroup#project_id}

---

### ComputeNodeGroupTimeouts <a name="ComputeNodeGroupTimeouts" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.Initializer"></a>

```typescript
import { computeNodeGroup } from '@cdktf/provider-google'

const computeNodeGroupTimeouts: computeNodeGroup.ComputeNodeGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#create ComputeNodeGroup#create}. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#delete ComputeNodeGroup#delete}. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#update ComputeNodeGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#create ComputeNodeGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#delete ComputeNodeGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_node_group#update ComputeNodeGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNodeGroupAutoscalingPolicyOutputReference <a name="ComputeNodeGroupAutoscalingPolicyOutputReference" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.Initializer"></a>

```typescript
import { computeNodeGroup } from '@cdktf/provider-google'

new computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resetMaxNodes">resetMaxNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resetMinNodes">resetMinNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxNodes` <a name="resetMaxNodes" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resetMaxNodes"></a>

```typescript
public resetMaxNodes(): void
```

##### `resetMinNodes` <a name="resetMinNodes" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resetMinNodes"></a>

```typescript
public resetMinNodes(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.maxNodesInput">maxNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.minNodesInput">minNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.maxNodes">maxNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.minNodes">minNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxNodesInput`<sup>Optional</sup> <a name="maxNodesInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.maxNodesInput"></a>

```typescript
public readonly maxNodesInput: number;
```

- *Type:* number

---

##### `minNodesInput`<sup>Optional</sup> <a name="minNodesInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.minNodesInput"></a>

```typescript
public readonly minNodesInput: number;
```

- *Type:* number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.maxNodes"></a>

```typescript
public readonly maxNodes: number;
```

- *Type:* number

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.minNodes"></a>

```typescript
public readonly minNodes: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeNodeGroupAutoscalingPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a>

---


### ComputeNodeGroupMaintenanceWindowOutputReference <a name="ComputeNodeGroupMaintenanceWindowOutputReference" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { computeNodeGroup } from '@cdktf/provider-google'

new computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeNodeGroupMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a>

---


### ComputeNodeGroupShareSettingsOutputReference <a name="ComputeNodeGroupShareSettingsOutputReference" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.Initializer"></a>

```typescript
import { computeNodeGroup } from '@cdktf/provider-google'

new computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.putProjectMap">putProjectMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.resetProjectMap">resetProjectMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProjectMap` <a name="putProjectMap" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.putProjectMap"></a>

```typescript
public putProjectMap(value: IResolvable | ComputeNodeGroupShareSettingsProjectMap[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.putProjectMap.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap">ComputeNodeGroupShareSettingsProjectMap</a>[]

---

##### `resetProjectMap` <a name="resetProjectMap" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.resetProjectMap"></a>

```typescript
public resetProjectMap(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.projectMap">projectMap</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList">ComputeNodeGroupShareSettingsProjectMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.projectMapInput">projectMapInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap">ComputeNodeGroupShareSettingsProjectMap</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.shareTypeInput">shareTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.shareType">shareType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `projectMap`<sup>Required</sup> <a name="projectMap" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.projectMap"></a>

```typescript
public readonly projectMap: ComputeNodeGroupShareSettingsProjectMapList;
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList">ComputeNodeGroupShareSettingsProjectMapList</a>

---

##### `projectMapInput`<sup>Optional</sup> <a name="projectMapInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.projectMapInput"></a>

```typescript
public readonly projectMapInput: IResolvable | ComputeNodeGroupShareSettingsProjectMap[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap">ComputeNodeGroupShareSettingsProjectMap</a>[]

---

##### `shareTypeInput`<sup>Optional</sup> <a name="shareTypeInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.shareTypeInput"></a>

```typescript
public readonly shareTypeInput: string;
```

- *Type:* string

---

##### `shareType`<sup>Required</sup> <a name="shareType" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.shareType"></a>

```typescript
public readonly shareType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeNodeGroupShareSettings;
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a>

---


### ComputeNodeGroupShareSettingsProjectMapList <a name="ComputeNodeGroupShareSettingsProjectMapList" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer"></a>

```typescript
import { computeNodeGroup } from '@cdktf/provider-google'

new computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.get"></a>

```typescript
public get(index: number): ComputeNodeGroupShareSettingsProjectMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap">ComputeNodeGroupShareSettingsProjectMap</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeNodeGroupShareSettingsProjectMap[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap">ComputeNodeGroupShareSettingsProjectMap</a>[]

---


### ComputeNodeGroupShareSettingsProjectMapOutputReference <a name="ComputeNodeGroupShareSettingsProjectMapOutputReference" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer"></a>

```typescript
import { computeNodeGroup } from '@cdktf/provider-google'

new computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap">ComputeNodeGroupShareSettingsProjectMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeNodeGroupShareSettingsProjectMap;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap">ComputeNodeGroupShareSettingsProjectMap</a>

---


### ComputeNodeGroupTimeoutsOutputReference <a name="ComputeNodeGroupTimeoutsOutputReference" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeNodeGroup } from '@cdktf/provider-google'

new computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts">ComputeNodeGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeNodeGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts">ComputeNodeGroupTimeouts</a>

---



