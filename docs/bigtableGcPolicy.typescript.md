# `google_bigtable_gc_policy`

Refer to the Terraform Registory for docs: [`google_bigtable_gc_policy`](https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy).

# `bigtableGcPolicy` Submodule <a name="`bigtableGcPolicy` Submodule" id="@cdktf/provider-google.bigtableGcPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigtableGcPolicy <a name="BigtableGcPolicy" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy google_bigtable_gc_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer"></a>

```typescript
import { bigtableGcPolicy } from '@cdktf/provider-google'

new bigtableGcPolicy.BigtableGcPolicy(scope: Construct, id: string, config: BigtableGcPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig">BigtableGcPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig">BigtableGcPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.putMaxAge">putMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.putMaxVersion">putMaxVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetGcRules">resetGcRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetMaxAge">resetMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetMaxVersion">resetMaxVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putMaxAge` <a name="putMaxAge" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.putMaxAge"></a>

```typescript
public putMaxAge(value: BigtableGcPolicyMaxAge): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.putMaxAge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a>

---

##### `putMaxVersion` <a name="putMaxVersion" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.putMaxVersion"></a>

```typescript
public putMaxVersion(value: IResolvable | BigtableGcPolicyMaxVersion[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.putMaxVersion.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a>[]

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetGcRules` <a name="resetGcRules" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetGcRules"></a>

```typescript
public resetGcRules(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxAge` <a name="resetMaxAge" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetMaxAge"></a>

```typescript
public resetMaxAge(): void
```

##### `resetMaxVersion` <a name="resetMaxVersion" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetMaxVersion"></a>

```typescript
public resetMaxVersion(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isConstruct"></a>

```typescript
import { bigtableGcPolicy } from '@cdktf/provider-google'

bigtableGcPolicy.BigtableGcPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isTerraformElement"></a>

```typescript
import { bigtableGcPolicy } from '@cdktf/provider-google'

bigtableGcPolicy.BigtableGcPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isTerraformResource"></a>

```typescript
import { bigtableGcPolicy } from '@cdktf/provider-google'

bigtableGcPolicy.BigtableGcPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxAge">maxAge</a></code> | <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference">BigtableGcPolicyMaxAgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxVersion">maxVersion</a></code> | <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList">BigtableGcPolicyMaxVersionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.columnFamilyInput">columnFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.gcRulesInput">gcRulesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.instanceNameInput">instanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxAgeInput">maxAgeInput</a></code> | <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxVersionInput">maxVersionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.tableInput">tableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.columnFamily">columnFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.gcRules">gcRules</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.instanceName">instanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.table">table</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxAge"></a>

```typescript
public readonly maxAge: BigtableGcPolicyMaxAgeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference">BigtableGcPolicyMaxAgeOutputReference</a>

---

##### `maxVersion`<sup>Required</sup> <a name="maxVersion" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxVersion"></a>

```typescript
public readonly maxVersion: BigtableGcPolicyMaxVersionList;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList">BigtableGcPolicyMaxVersionList</a>

---

##### `columnFamilyInput`<sup>Optional</sup> <a name="columnFamilyInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.columnFamilyInput"></a>

```typescript
public readonly columnFamilyInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `gcRulesInput`<sup>Optional</sup> <a name="gcRulesInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.gcRulesInput"></a>

```typescript
public readonly gcRulesInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceNameInput`<sup>Optional</sup> <a name="instanceNameInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.instanceNameInput"></a>

```typescript
public readonly instanceNameInput: string;
```

- *Type:* string

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxAgeInput"></a>

```typescript
public readonly maxAgeInput: BigtableGcPolicyMaxAge;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a>

---

##### `maxVersionInput`<sup>Optional</sup> <a name="maxVersionInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxVersionInput"></a>

```typescript
public readonly maxVersionInput: IResolvable | BigtableGcPolicyMaxVersion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a>[]

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.tableInput"></a>

```typescript
public readonly tableInput: string;
```

- *Type:* string

---

##### `columnFamily`<sup>Required</sup> <a name="columnFamily" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.columnFamily"></a>

```typescript
public readonly columnFamily: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `gcRules`<sup>Required</sup> <a name="gcRules" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.gcRules"></a>

```typescript
public readonly gcRules: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigtableGcPolicyConfig <a name="BigtableGcPolicyConfig" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.Initializer"></a>

```typescript
import { bigtableGcPolicy } from '@cdktf/provider-google'

const bigtableGcPolicyConfig: bigtableGcPolicy.BigtableGcPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.columnFamily">columnFamily</a></code> | <code>string</code> | The name of the column family. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.instanceName">instanceName</a></code> | <code>string</code> | The name of the Bigtable instance. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.table">table</a></code> | <code>string</code> | The name of the table. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | The deletion policy for the GC policy. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.gcRules">gcRules</a></code> | <code>string</code> | Serialized JSON string for garbage collection policy. Conflicts with "mode", "max_age" and "max_version". |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy#id BigtableGcPolicy#id}. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.maxAge">maxAge</a></code> | <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a></code> | max_age block. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.maxVersion">maxVersion</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a>[]</code> | max_version block. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.mode">mode</a></code> | <code>string</code> | NOTE: 'gc_rules' is more flexible, and should be preferred over this field for new resources. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `columnFamily`<sup>Required</sup> <a name="columnFamily" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.columnFamily"></a>

```typescript
public readonly columnFamily: string;
```

- *Type:* string

The name of the column family.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy#column_family BigtableGcPolicy#column_family}

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

The name of the Bigtable instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy#instance_name BigtableGcPolicy#instance_name}

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

The name of the table.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy#table BigtableGcPolicy#table}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

The deletion policy for the GC policy.

Setting ABANDON allows the resource
to be abandoned rather than deleted. This is useful for GC policy as it cannot be deleted
in a replicated instance. Possible values are: "ABANDON".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy#deletion_policy BigtableGcPolicy#deletion_policy}

---

##### `gcRules`<sup>Optional</sup> <a name="gcRules" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.gcRules"></a>

```typescript
public readonly gcRules: string;
```

- *Type:* string

Serialized JSON string for garbage collection policy. Conflicts with "mode", "max_age" and "max_version".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy#gc_rules BigtableGcPolicy#gc_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy#id BigtableGcPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.maxAge"></a>

```typescript
public readonly maxAge: BigtableGcPolicyMaxAge;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a>

max_age block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy#max_age BigtableGcPolicy#max_age}

---

##### `maxVersion`<sup>Optional</sup> <a name="maxVersion" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.maxVersion"></a>

```typescript
public readonly maxVersion: IResolvable | BigtableGcPolicyMaxVersion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a>[]

max_version block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy#max_version BigtableGcPolicy#max_version}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

NOTE: 'gc_rules' is more flexible, and should be preferred over this field for new resources.

This field may be deprecated in the future. If multiple policies are set, you should choose between UNION OR INTERSECTION.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy#mode BigtableGcPolicy#mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy#project BigtableGcPolicy#project}

---

### BigtableGcPolicyMaxAge <a name="BigtableGcPolicyMaxAge" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge.Initializer"></a>

```typescript
import { bigtableGcPolicy } from '@cdktf/provider-google'

const bigtableGcPolicyMaxAge: bigtableGcPolicy.BigtableGcPolicyMaxAge = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge.property.days">days</a></code> | <code>number</code> | Number of days before applying GC policy. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge.property.duration">duration</a></code> | <code>string</code> | Duration before applying GC policy. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

Number of days before applying GC policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy#days BigtableGcPolicy#days}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Duration before applying GC policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy#duration BigtableGcPolicy#duration}

---

### BigtableGcPolicyMaxVersion <a name="BigtableGcPolicyMaxVersion" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion.Initializer"></a>

```typescript
import { bigtableGcPolicy } from '@cdktf/provider-google'

const bigtableGcPolicyMaxVersion: bigtableGcPolicy.BigtableGcPolicyMaxVersion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion.property.number">number</a></code> | <code>number</code> | Number of version before applying the GC policy. |

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion.property.number"></a>

```typescript
public readonly number: number;
```

- *Type:* number

Number of version before applying the GC policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_gc_policy#number BigtableGcPolicy#number}

---

## Classes <a name="Classes" id="Classes"></a>

### BigtableGcPolicyMaxAgeOutputReference <a name="BigtableGcPolicyMaxAgeOutputReference" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.Initializer"></a>

```typescript
import { bigtableGcPolicy } from '@cdktf/provider-google'

new bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resetDays">resetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resetDuration">resetDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resetDays"></a>

```typescript
public resetDays(): void
```

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.daysInput">daysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.days">days</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number;
```

- *Type:* number

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigtableGcPolicyMaxAge;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a>

---


### BigtableGcPolicyMaxVersionList <a name="BigtableGcPolicyMaxVersionList" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer"></a>

```typescript
import { bigtableGcPolicy } from '@cdktf/provider-google'

new bigtableGcPolicy.BigtableGcPolicyMaxVersionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.get"></a>

```typescript
public get(index: number): BigtableGcPolicyMaxVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BigtableGcPolicyMaxVersion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a>[]

---


### BigtableGcPolicyMaxVersionOutputReference <a name="BigtableGcPolicyMaxVersionOutputReference" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer"></a>

```typescript
import { bigtableGcPolicy } from '@cdktf/provider-google'

new bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.numberInput">numberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.number">number</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numberInput`<sup>Optional</sup> <a name="numberInput" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.numberInput"></a>

```typescript
public readonly numberInput: number;
```

- *Type:* number

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.number"></a>

```typescript
public readonly number: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigtableGcPolicyMaxVersion | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a> | cdktf.IResolvable

---



