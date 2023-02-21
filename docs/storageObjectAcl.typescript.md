# `storageObjectAcl` Submodule <a name="`storageObjectAcl` Submodule" id="@cdktf/provider-google.storageObjectAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageObjectAcl <a name="StorageObjectAcl" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/storage_object_acl google_storage_object_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer"></a>

```typescript
import { storageObjectAcl } from '@cdktf/provider-google'

new storageObjectAcl.StorageObjectAcl(scope: Construct, id: string, config: StorageObjectAclConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig">StorageObjectAclConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig">StorageObjectAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.resetPredefinedAcl">resetPredefinedAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.resetRoleEntity">resetRoleEntity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPredefinedAcl` <a name="resetPredefinedAcl" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.resetPredefinedAcl"></a>

```typescript
public resetPredefinedAcl(): void
```

##### `resetRoleEntity` <a name="resetRoleEntity" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.resetRoleEntity"></a>

```typescript
public resetRoleEntity(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isConstruct"></a>

```typescript
import { storageObjectAcl } from '@cdktf/provider-google'

storageObjectAcl.StorageObjectAcl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isTerraformElement"></a>

```typescript
import { storageObjectAcl } from '@cdktf/provider-google'

storageObjectAcl.StorageObjectAcl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isTerraformResource"></a>

```typescript
import { storageObjectAcl } from '@cdktf/provider-google'

storageObjectAcl.StorageObjectAcl.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.objectInput">objectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.predefinedAclInput">predefinedAclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.roleEntityInput">roleEntityInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.predefinedAcl">predefinedAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.roleEntity">roleEntity</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.objectInput"></a>

```typescript
public readonly objectInput: string;
```

- *Type:* string

---

##### `predefinedAclInput`<sup>Optional</sup> <a name="predefinedAclInput" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.predefinedAclInput"></a>

```typescript
public readonly predefinedAclInput: string;
```

- *Type:* string

---

##### `roleEntityInput`<sup>Optional</sup> <a name="roleEntityInput" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.roleEntityInput"></a>

```typescript
public readonly roleEntityInput: string[];
```

- *Type:* string[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `predefinedAcl`<sup>Required</sup> <a name="predefinedAcl" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.predefinedAcl"></a>

```typescript
public readonly predefinedAcl: string;
```

- *Type:* string

---

##### `roleEntity`<sup>Required</sup> <a name="roleEntity" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.roleEntity"></a>

```typescript
public readonly roleEntity: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAcl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageObjectAclConfig <a name="StorageObjectAclConfig" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.Initializer"></a>

```typescript
import { storageObjectAcl } from '@cdktf/provider-google'

const storageObjectAclConfig: storageObjectAcl.StorageObjectAclConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_object_acl#bucket StorageObjectAcl#bucket}. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.object">object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_object_acl#object StorageObjectAcl#object}. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_object_acl#id StorageObjectAcl#id}. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.predefinedAcl">predefinedAcl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_object_acl#predefined_acl StorageObjectAcl#predefined_acl}. |
| <code><a href="#@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.roleEntity">roleEntity</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_object_acl#role_entity StorageObjectAcl#role_entity}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_object_acl#bucket StorageObjectAcl#bucket}.

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_object_acl#object StorageObjectAcl#object}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_object_acl#id StorageObjectAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `predefinedAcl`<sup>Optional</sup> <a name="predefinedAcl" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.predefinedAcl"></a>

```typescript
public readonly predefinedAcl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_object_acl#predefined_acl StorageObjectAcl#predefined_acl}.

---

##### `roleEntity`<sup>Optional</sup> <a name="roleEntity" id="@cdktf/provider-google.storageObjectAcl.StorageObjectAclConfig.property.roleEntity"></a>

```typescript
public readonly roleEntity: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_object_acl#role_entity StorageObjectAcl#role_entity}.

---



